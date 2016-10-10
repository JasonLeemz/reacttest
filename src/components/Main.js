require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

//获取图片相关数据
let imageDatas = require('../data/imageDatas.json');

//利用自执行函数
imageDatas = (function genImageUrl(imageDatasArr) {
  for (let i = 0; i < imageDatasArr.length; i++) {
    imageDatasArr[i].imageUrl = require('../images/' + imageDatasArr[i].fileName);
  }

  return imageDatasArr;
})(imageDatas);

let ImgFigure = React.createClass({
  render: function () {

    return (
      <figure className="img-figure">
        <img className="img-item"
             src={this.props.data.imageUrl}
             alt={this.props.data.title}
        />
        <figcaption className="img-title">
          <h2>{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
});

let GalleryByReactApp = React.createClass({
  Constant: {
    centerPos: {
      left: 0,
      right: 0
    },
    hPosRange: {
      leftSecX: [0, 0],
      rightSecX: [0, 0],
      y: [0, 0]
    },
    vPosRange: {
      x: [0, 0],
      topY: [0, 0]
    }
  },

  componentDidMount(){

    // scrollWidth：对象的实际内容的宽度，不包边线宽度，会随对象中内容超过可视区后而变大。
    // clientWidth：对象内容的可视区的宽度，不包滚动条等边线，会随对象显示大小的变化而改变。
    // offsetWidth：对象整体的实际宽度，包滚动条等边线，会随对象显示大小的变化而改变。
    let stageDOM = React.findDOMMode(this.refs),
      stageW = stageDOM.scrollWidth, //不包含滚动条，内容
      stageH = stageDOM.scrollHeight,
      halfStageW = Math.ceil(stageW / 2),
      halfStageH = Math.ceil(stageH / 2);
  },
  render(){
    let controllerUnits = [],
      imgFigures = [];

    imageDatas.forEach((item, index) => {
      imgFigures.push(<ImgFigure data={item} key={index}/>);
    });

    return (
      <div className="stage" ref="stage">
        <div className="img-sec">
          {imgFigures}
        </div>
        {controllerUnits}
        <div className="controller-nav">

        </div>
      </div>
    );
  }
});

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <GalleryByReactApp />
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
