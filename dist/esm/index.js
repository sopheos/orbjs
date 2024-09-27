import { Geo } from "./geo";
import { FileUpload } from "./upload/file";
import { ImageUpload } from "./upload/image";
import { imagePrepare } from "./image/prepare";
import { isWebpConversionSupported, isWebpSupported } from "./image/webpSupport";
import { dateTimeFormatAgo } from "./format_helpers/date_format";
import { numberFormat } from "./format_helpers/number_format";
import { units } from "./format_helpers/number_format";
import { builder } from "./opening_hour/builder";
import { parser } from "./opening_hour/parser";
import { Schedules } from "./opening_hour/schedules";
import { removeWhitespaces } from "./rules/whitespaces";
import { generic } from './lang/generic';
import { errors } from './lang/errors';
export default {
  geo: {
    Geo: Geo
  },
  image: {
    imagePrepare: imagePrepare,
    isWebpSupported: isWebpSupported,
    isWebpConversionSupported: isWebpConversionSupported
  },
  upload: {
    FileUpload: FileUpload,
    ImageUpload: ImageUpload
  },
  format_helpers: {
    dateTimeFormatAgo: dateTimeFormatAgo,
    numberFormat: numberFormat,
    units: units
  },
  opening_hour: {
    builder: builder,
    parser: parser,
    Schedules: Schedules
  },
  rules: {
    removeWhitespaces: removeWhitespaces
  },
  lang: {
    errors: errors,
    generic: generic
  }
};
//# sourceMappingURL=index.js.map