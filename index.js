import PropTypes from "prop-types";
import React, { Component } from "react";

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

const paintDrop = (context, { font, opacity, x, y, string }) => {
  context.font = font;
  context.globalAlpha = opacity;
  context.fillText(string, x, y);
};

const newRandomDrop = (drops, fontStyles, width, height) => ({
  string: sample(drops),
  font: sample(fontStyles),
  x: Math.floor(Math.random() * width + 1),
  y: Math.floor(Math.random() * height + 1),
  verticalSpeed: Math.floor(Math.random() * 5 + 3),
  horizontalSpeed: Math.floor(Math.random() * 1 + 1),
  horizontalDirection: Math.random() > 0.5 ? "right" : "left",
  opacity: 1,
  opacitySpeed: 0.02 * (Math.random() * 1 + 1)
});

const moveDrop = drop => ({
  ...drop,
  x:
    drop.horizontalDirection === "left"
      ? drop.x + drop.horizontalSpeed
      : drop.x - drop.horizontalSpeed,
  y: drop.y + drop.verticalSpeed,
  opacity: drop.opacity - drop.opacitySpeed
});

class MakeItRain extends Component {
  static defaultProps = {
    drops: ["💵", "💰", "👑", "🏆"],
    dropCount: 250,
    fontStyles: ["20px serif", "30px serif"]
  };

  state = {
    dropsForDrawing: new Array(this.props.dropCount).fill(undefined)
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.__resizeCanvas);
    this.__resizeCanvas();
    this.__tick();
  };

  componentWillUnmount = () => {
    window.cancelAnimationFrame(this.animationFrame);
    window.removeEventListener("resize", this.__resizeCanvas);
  };

  shouldComponentUpdate = () => false;

  componentWillReceiveProps = ({ dropCount: nextDropCount }) => {
    const { dropCount } = this.props;

    if (nextDropCount !== dropCount) {
      const dropsForDrawing = [...this.state.dropsForDrawing];

      if (nextDropCount > dropCount) {
        while (dropCount > dropsForDrawing.length) {
          dropsForDrawing.push(undefined);
        }
      } else if (nextDropCount < dropCount) {
        while (dropCount < dropsForDrawing.length) {
          dropsForDrawing.pop();
        }
      }

      this.setState({ dropsForDrawing });
    }
  };

  __resizeCanvas = () => {
    const { canvas } = this.refs;

    canvas.width = canvas.parentNode.clientWidth;
    canvas.height = canvas.parentNode.clientHeight;
  };

  __tick = () => {
    const context = this.refs.canvas.getContext("2d");
    context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);

    this.setState(
      {
        dropsForDrawing: this.state.dropsForDrawing.map(this.__stepDrop)
      },
      () => {
        this.state.dropsForDrawing.forEach(paintDrop.bind(null, context));
        this.animationFrame = window.requestAnimationFrame(this.__tick);
      }
    );
  };

  __stepDrop = dropForDrawing => {
    const { drops, fontStyles } = this.props;
    const { height, width } = this.refs.canvas;

    if (
      dropForDrawing === undefined ||
      dropForDrawing.y >= height ||
      dropForDrawing.x >= width ||
      dropForDrawing.opacity < 0.1
    ) {
      return newRandomDrop(drops, fontStyles, width, height);
    } else {
      return moveDrop(dropForDrawing);
    }
  };

  render() {
    return <canvas ref="canvas" />;
  }
}

MakeItRain.propTypes = {
  dropCount: PropTypes.number,
  drops: PropTypes.arrayOf(PropTypes.string),
  fontStyles: PropTypes.arrayOf(PropTypes.string)
};

export default MakeItRain;