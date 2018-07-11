import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { Text } from 'react-native';
import labelStyle from './labelStyle';
var LimeLabel = /** @class */ (function (_super) {
    tslib_1.__extends(LimeLabel, _super);
    function LimeLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LimeLabel.prototype.render = function () {
        return (React.createElement(Text, { style: [labelStyle, { color: 'lime' }] }, this.props.text));
    };
    return LimeLabel;
}(Component));
export default LimeLabel;
//# sourceMappingURL=lime-label.js.map