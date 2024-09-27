"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageUpload = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _file = require("./file");

var _tsExifParser = require("ts-exif-parser");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Class upload image, to send an image to a server with an axios request
 * @extends FileUpload
 * Documentation : Le live
 */
var ImageUpload = /*#__PURE__*/function (_FileUpload) {
  (0, _inherits2.default)(ImageUpload, _FileUpload);

  var _super = _createSuper(ImageUpload);

  /**
   * @param {ImageUploadOptions} options
   */
  function ImageUpload(options) {
    var _this;

    (0, _classCallCheck2.default)(this, ImageUpload);
    var _options$allowedTypes = options.allowedTypes,
        allowedTypes = _options$allowedTypes === void 0 ? ["image/jpeg", "image/png"] : _options$allowedTypes,
        _options$quality = options.quality,
        quality = _options$quality === void 0 ? 0.75 : _options$quality,
        _options$outputType = options.outputType,
        outputType = _options$outputType === void 0 ? "image/jpeg" : _options$outputType,
        _options$orientationA = options.orientationAllowed,
        orientationAllowed = _options$orientationA === void 0 ? true : _options$orientationA,
        _options$lessCrop = options.lessCrop,
        lessCrop = _options$lessCrop === void 0 ? false : _options$lessCrop;
    _this = _super.call(this, options);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "imageOptions", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "window", void 0);
    _this.imageOptions = _objectSpread(_objectSpread({
      allowedTypes: allowedTypes,
      quality: quality,
      outputType: outputType,
      orientationAllowed: orientationAllowed,
      lessCrop: lessCrop
    }, _this.options), options);
    _this.window = window;
    return _this;
  }
  /**
   * Upload image from a file
   * @param {File} file
   * @param {Array<{ name: string, value: string | Blob, fileName?: string }>} data default empty array
   */


  (0, _createClass2.default)(ImageUpload, [{
    key: "uploadFile",
    value: function uploadFile(file) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.reset();

      if (!this.isFileTypeValid(file)) {
        return;
      }

      this.resizeAndConvert(file, data);
    }
    /**
     * Upload image from a blob
     * @param {Blob} blob
     * @param {string} name
     * @param {Array<{ name: string, value: string | Blob, fileName?: string }>} data default empty array
     */

  }, {
    key: "uploadBlob",
    value: function uploadBlob(blob, name) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var file = new File([blob], name, {
        type: blob.type
      });
      this.uploadFile(file, data);
    }
    /**
     * Determines if webp is supported by the browser
     * @returns a promise resolving to a boolean to know if webp is supported
     */

  }, {
    key: "isImageMinSizeValid",
    value:
    /**
     * Determines if image min size is valid
     * Emit error if setError
     * @param {number} width
     * @param {number} height
     * @param {boolean} setError default true
     * @returns true if image min size valid, false otherwise
     */
    function isImageMinSizeValid(width, height) {
      var _this2 = this;

      var setError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!(this.imageOptions.minWidth && this.imageOptions.minHeight)) {
        return true;
      }

      var isValid = width >= this.imageOptions.minWidth && height >= this.imageOptions.minHeight;

      if (setError && !isValid) {
        setTimeout(function () {
          return _this2.error.next("minsize");
        });
        setTimeout(function () {
          return _this2.complete.next(true);
        });
      }

      return isValid;
    }
    /**
     * Determines if file type is valid
     * @param {File} file
     * @returns {boolean} true if file type valid, false otherwise
     */

  }, {
    key: "isFileTypeValid",
    value: function isFileTypeValid(file) {
      var _this3 = this;

      if (this.imageOptions.allowedTypes.length > 0 && !this.imageOptions.allowedTypes.some(function (allowedType) {
        return allowedType === file.type;
      })) {
        setTimeout(function () {
          var error = file.type === "image/webp" ? "invalid_filetype_webp" : "invalid_filetype";

          _this3.error.next(error);
        });
        setTimeout(function () {
          return _this3.complete.next(true);
        });
        this.reset();
        return false;
      }

      return true;
    }
    /**
     * If orientationAllowed, handle big side/small side instead of width/height
     *
     * @param {number} width
     * @param {number} height
     */

  }, {
    key: "handleOrientationAllowed",
    value: function handleOrientationAllowed(width, height) {
      if (!this.imageOptions.orientationAllowed) return; // handle max size. If image is wider than higher we make sur that maxWidth is bigger than maxHeight
      // if not we swap max size

      if (this.imageOptions.maxHeight && this.imageOptions.maxWidth) {
        if (width > height) {
          if (this.imageOptions.maxHeight > this.imageOptions.maxWidth) {
            var _ref = [this.imageOptions.maxWidth, this.imageOptions.maxHeight];
            this.imageOptions.maxHeight = _ref[0];
            this.imageOptions.maxWidth = _ref[1];
          }
        } else if (this.imageOptions.maxHeight < this.imageOptions.maxWidth) {
          var _ref2 = [this.imageOptions.maxWidth, this.imageOptions.maxHeight];
          this.imageOptions.maxHeight = _ref2[0];
          this.imageOptions.maxWidth = _ref2[1];
        }
      } // handle min size. If image is wider than higher we make sur that minWidth is bigger than minHeight
      // if not we swap min size


      if (this.imageOptions.minHeight && this.imageOptions.minWidth) {
        if (width > height) {
          if (this.imageOptions.minHeight > this.imageOptions.minWidth) {
            var _ref3 = [this.imageOptions.minWidth, this.imageOptions.minHeight];
            this.imageOptions.minHeight = _ref3[0];
            this.imageOptions.minWidth = _ref3[1];
          }
        } else if (this.imageOptions.minHeight < this.imageOptions.minWidth) {
          var _ref4 = [this.imageOptions.minWidth, this.imageOptions.minHeight];
          this.imageOptions.minHeight = _ref4[0];
          this.imageOptions.minWidth = _ref4[1];
        }
      }
    }
    /**
     * Build FormData et call sendFiles
     * Gère les erreurs
     * @param {File} file
     * @param {Array<{ name: string, value: string | Blob, fileName?: string }>} data default empty array
     */

  }, {
    key: "resizeAndConvert",
    value: function resizeAndConvert(file) {
      var _this4 = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var exif;
      this.initialProgress = 10;
      setTimeout(function () {
        return _this4.progress.next(_this4.initialProgress);
      });
      var image = document.createElement("img");

      image.onload = function () {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var width = image.width,
            height = image.height;

        _this4.handleOrientationAllowed(width, height);

        if (!_this4.isImageMinSizeValid(width, height)) return; // if no max/min size, set max/min size to width/height

        var _this4$imageOptions = _this4.imageOptions,
            _this4$imageOptions$m = _this4$imageOptions.maxWidth,
            maxWidth = _this4$imageOptions$m === void 0 ? width : _this4$imageOptions$m,
            _this4$imageOptions$m2 = _this4$imageOptions.maxHeight,
            maxHeight = _this4$imageOptions$m2 === void 0 ? height : _this4$imageOptions$m2,
            _this4$imageOptions$m3 = _this4$imageOptions.minWidth,
            minWidth = _this4$imageOptions$m3 === void 0 ? width : _this4$imageOptions$m3,
            _this4$imageOptions$m4 = _this4$imageOptions.minHeight,
            minHeight = _this4$imageOptions$m4 === void 0 ? height : _this4$imageOptions$m4,
            lessCrop = _this4$imageOptions.lessCrop; // Define ratio to have the biggest image allowed

        var maxWRatio = maxWidth / width;
        var maxHRatio = maxHeight / height;
        var ratios = [maxWRatio, maxHRatio].filter(function (ratio) {
          return ratio < 1;
        });
        var ratio = 1;

        if (ratios.length > 0) {
          ratio = lessCrop ? Math.min.apply(Math, (0, _toConsumableArray2.default)(ratios)) : Math.max.apply(Math, (0, _toConsumableArray2.default)(ratios));
        }

        var newWidth = width * ratio;
        var newHeight = height * ratio; // Make sure the ratio respect min size if we need to resize down the image

        if (newWidth < minWidth || newHeight < minHeight) {
          var minWRatio = minWidth / width;
          var minHRatio = minHeight / height;

          var _ratios = [minWRatio, minHRatio].filter(function (ratio) {
            return ratio < 1;
          });

          ratio = _ratios.length > 0 ? Math.max.apply(Math, (0, _toConsumableArray2.default)(_ratios)) : 1;
          newWidth = width * ratio;
          newHeight = height * ratio;
        }

        var sourceWidth = newWidth > maxWidth ? maxWidth / ratio : width;
        var sourceHeight = newHeight > maxHeight ? maxHeight / ratio : height;
        var x = 0;
        var y = 0; // if needed, offset the exceeding part on the x axis

        if (newWidth > maxWidth) {
          x = (width - sourceWidth) / 2;
          newWidth = maxWidth;
        } // if needed, offset the exceeding part on the y axis


        if (newHeight > maxHeight) {
          y = (height - sourceHeight) / 2;
          newHeight = maxHeight;
        }

        canvas.width = newWidth;
        canvas.height = newHeight;
        context.drawImage(image, x, y, sourceWidth, sourceHeight, 0, 0, canvas.width, canvas.height);
        var metadata = [{
          name: "metadata[quality]",
          value: String(_this4.imageOptions.quality)
        }];

        if (exif && exif.lat && exif.lon) {
          metadata.push({
            name: "metadata[lat]",
            value: exif.lat
          }, {
            name: "metadata[lon]",
            value: exif.lon
          });
        }

        _this4.initialProgress = 17;
        setTimeout(function () {
          return _this4.progress.next(_this4.initialProgress);
        });

        var blobCallback = function blobCallback(blob) {
          if (!blob) {
            setTimeout(function () {
              return _this4.error.next("default");
            });
            setTimeout(function () {
              return _this4.complete.next(true);
            });

            _this4.reset();

            return;
          }

          _this4.initialProgress = 25;
          setTimeout(function () {
            return _this4.progress.next(_this4.initialProgress);
          }); // Rename file with correct extension

          var nameSplit = file.name.split(".");
          nameSplit.pop();
          var nameParts = [].concat((0, _toConsumableArray2.default)(nameSplit), [blob.type.replace("image/", "")]);
          var newFile = new File([blob], nameParts.join("."), {
            type: blob.type
          });

          _this4.buildFormData(newFile, [].concat(metadata, (0, _toConsumableArray2.default)(data)));
        };

        canvas.toBlob(blobCallback, _this4.imageOptions.outputType, _this4.imageOptions.quality);
      };

      var reader = new FileReader();

      reader.onload = function (event) {
        var result = event.target.result;
        var urlCreator = _this4.window.URL || _this4.window.webkitURL;

        if (result && typeof result !== "string") {
          try {
            var Data = _tsExifParser.ExifParserFactory.create(result).parse();

            if (Data && Data.tags.GPSLatitude && Data.tags.GPSLongitude) {
              var lat = String(Data.tags.GPSLatitude);
              var lon = String(Data.tags.GPSLongitude);
              exif = {
                lat: lat,
                lon: lon
              };
            }
          } catch (e) {
            console.log("can't read exif data");
          }
        }

        image.src = urlCreator.createObjectURL(file);
      };

      reader.readAsArrayBuffer(file);
    }
  }], [{
    key: "isWebpSupported",
    value: function isWebpSupported() {
      return new Promise(function (resolve) {
        var img = new Image();

        img.onload = function () {
          return resolve(img.width === 2 && img.height === 1);
        };

        img.onerror = function () {
          return resolve(false);
        };

        img.src = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==";
      });
    }
    /**
     * Determines if webp convertion with canvas is supported by the browser
     * @returns a boolean to know if webp conversion is supported
     */

  }, {
    key: "isWebpConvertionSupported",
    value: function isWebpConvertionSupported() {
      var canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL("image/webp").match("image/webp") !== null;
    }
  }]);
  return ImageUpload;
}(_file.FileUpload);

exports.ImageUpload = ImageUpload;
//# sourceMappingURL=image.js.map