import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Drag from '../Drag';
import Spinner from '../Spinner';
import Icon from '../Icon';

class Pull extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offsetY: 0,
      duration: 0,
      actionState: props.refreshing ? 'loading' : 'normal',
    };
    this.onDragMove = this.onDragMove.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ('refreshing' in nextProps && nextProps.refreshing !== this.props.refreshing) {
      const actionState = nextProps.refreshing ? 'loading' : 'success';
      this.doAction(actionState);
    }
  }

  onDragMove(event, { offsetY }) {
    if (offsetY < 0) return;
    if (document.body.scrollTop > 0) return;

    // 解决低端安卓系统只触发一次touchmove事件的bug
    event.preventDefault();

    const { moveDistance } = this.props;
    const action = ((offsetY / 2) < moveDistance)
      ? 'pull'
      : 'drop';

    this.doAction(action, offsetY);
    return true;
  }

  onDragEnd() {
    const { onRefresh } = this.props;
    const { actionState } = this.state;

    if (actionState === 'pull') {
      this.doAction('normal');
      return;
    }

    typeof onRefresh === 'function' && onRefresh();
  }

  doTransition({ offsetY, duration }) {
    this.setState({ offsetY, duration });
  }

  doAction(actionState, offset) {
    const { duration, stayTime } = this.props;

    this.setState({ actionState });
    switch (actionState) {
      case 'pull':
      case 'drop':
        this.doTransition({ offsetY: offset / 2, duration: 0 });
        break;

      case 'loading':
        this.doTransition({ offsetY: 50, duration });
        break;

      case 'success':
        this.doTransition({ offsetY: 50, duration: 0 });
        setTimeout(() => {
          this.doAction('normal');
        }, stayTime);
        break;

      default:
        this.doTransition({ offsetY: 0, duration });
        break;
    }
  }

  renderControlTop(offsetY) {
    const { prefixCls, moveDistance, pullDownRender } = this.props;
    const { actionState } = this.state;
    const percent = ((offsetY < moveDistance ? offsetY : moveDistance) * 100) / moveDistance;

    if (pullDownRender) {
      return pullDownRender(actionState, percent);
    }

    const cls = classnames({
      [`${prefixCls}-control`]: true,
    });

    switch (actionState) {
      case 'pull':
        return (
          <div className={cls}>
            <Spinner percent={percent} />
            <span>下拉刷新</span>
          </div>
        );

      case 'drop':
        return (
          <div className={cls}>
            <Spinner percent={100} />
            <span>释放刷新</span>
          </div>
        );

      case 'loading':
        return (
          <div className={cls}>
            <Spinner className="rotate360" />
            <span>加载中</span>
          </div>
        );

      case 'success':
        return (
          <div className={cls}>
            <Icon type="right-round" theme="success" />
            <span>加载成功</span>
          </div>
        );

      default:
        return null;
    }
  }

  render() {
    const { prefixCls, className, children } = this.props;
    const { offsetY, duration } = this.state;

    const classes = classnames({
      [`${prefixCls}`]: true,
      [className]: !!className,
    });

    const style = {
      WebkitTransitionDuration: `${duration}ms`,
      transitionDuration: `${duration}ms`,
      height: offsetY,
    };

    return (
      <Drag
        onDragMove={this.onDragMove}
        onDragEnd={this.onDragEnd}>
        <div className={classes}>
          <div className={`${prefixCls}-down`} style={style}>
            {this.renderControlTop(offsetY)}
          </div>
          {children}
        </div>
      </Drag>
    );
  }
}

Pull.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  refreshing: PropTypes.bool,
  moveDistance: PropTypes.number,
  duration: PropTypes.number,
  stayTime: PropTypes.number,
  onRefresh: PropTypes.func,
  pullDownRender: PropTypes.func,
};

Pull.defaultProps = {
  prefixCls: 'za-pull',
  refreshing: false,
  moveDistance: 50,
  duration: 300,
  stayTime: 2000,
};

export default Pull;