import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { Text } from 'react-native';
import labelStyle from './labelStyle';
var CherryLabel = /** @class */ (function (_super) {
    tslib_1.__extends(CherryLabel, _super);
    function CherryLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CherryLabel.prototype.render = function () {
        return (React.createElement(Text, { style: [labelStyle, { color: 'pink' }] }, this.props.text));
    };
    return CherryLabel;
}(Component));
export default CherryLabel;
//# sourceMappingURL=cherry-label.js.map