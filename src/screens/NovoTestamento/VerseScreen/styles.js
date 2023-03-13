"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.SelectContainer = exports.LabelButton = exports.Button = exports.BottomModal = exports.BodyModal = exports.Label = exports.HeaderModal = exports.NumberFontSize = exports.VerseNumber = exports.TextContainer = exports.Verse = exports.Container = void 0;
var native_1 = require("styled-components/native");
exports.Container = native_1["default"].SafeAreaView(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
exports.Verse = native_1["default"].Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", "px;\n  text-align: justify;\n  \n  margin-bottom: 5px;\n"], ["\n  font-size: ", "px;\n  text-align: justify;\n  \n  margin-bottom: 5px;\n"])), function (props) { return (props.fontSize); });
exports.TextContainer = native_1["default"].Text(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: justify;\n"], ["\n  text-align: justify;\n"])));
exports.VerseNumber = native_1["default"].Text(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 25px;\n  color: #7205DC;\n"], ["\n  font-size: 25px;\n  color: #7205DC;\n"])));
exports.NumberFontSize = native_1["default"].Text(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", "px;\n"], ["\n  font-size: ", "px;\n"])), function (props) { return (props.fontSize); });
exports.HeaderModal = native_1["default"].View(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: row;\n    width: 237px;\n"], ["\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: row;\n    width: 237px;\n"])));
exports.Label = native_1["default"].Text(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: 25px;\n  margin-bottom: 20px;\n  align-self: center;\n"], ["\n  font-size: 25px;\n  margin-bottom: 20px;\n  align-self: center;\n"])));
exports.BodyModal = native_1["default"].View(templateObject_8 || (templateObject_8 = __makeTemplateObject([""], [""])));
exports.BottomModal = native_1["default"].View(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    flex-direction: row;\n    justify-content: flex-end;\n    width: 237px;\n"], ["\n    flex-direction: row;\n    justify-content: flex-end;\n    width: 237px;\n"])));
exports.Button = native_1["default"].TouchableOpacity(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  align-items: center;\n  justify-content: center;\n  \n  border-radius: 5px;\n  background-color: #7205DC;\n  \n  width: 90px;\n  height: 30px;\n  \n  margin-top: 20px;\n"], ["\n  align-items: center;\n  justify-content: center;\n  \n  border-radius: 5px;\n  background-color: #7205DC;\n  \n  width: 90px;\n  height: 30px;\n  \n  margin-top: 20px;\n"])));
exports.LabelButton = native_1["default"].Text(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-size: 20px;\n  color: #fff;\n"], ["\n  font-size: 20px;\n  color: #fff;\n"])));
exports.SelectContainer = native_1["default"].View(templateObject_12 || (templateObject_12 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
