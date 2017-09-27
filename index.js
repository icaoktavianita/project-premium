"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var New = function (_React$Component) {
  _inherits(New, _React$Component);

  function New(props) {
    _classCallCheck(this, New);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  New.prototype.getRef = function getRef(ref) {
    self.queryRef = ref;
  };

  New.prototype.handleClick = function handleClick() {
    var input = self.queryRef.value;
    var nilai = input * 6500;
    alert("Rp." + nilai + ",-");
  };

  New.prototype.render = function render() {
    var self = this;
    return React.createElement(
      "div",
      null,
      React.createElement(
        "a",
        null,
        " Premium"
      ),
      React.createElement("input", { ref: self.getRef, placeholder: "/Ltr" }),
      React.createElement(
        "button",
        { onClick: this.handleClick },
        "Process"
      )
    );
  };

  return New;
}(React.Component);

ReactDOM.render(React.createElement(New, null), document.getElementById('app'));