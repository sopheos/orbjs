import { Geo }  from "./geo"

import { FileUpload } from "./upload/file"
import { ImageUpload } from "./upload/image"

import { imagePrepare } from "./image/prepare"
import { isWebpConversionSupported, isWebpSupported } from "./image/webpSupport"

import { dateTimeFormatAgo } from "./format_helpers/date_format"
import { numberFormat } from "./format_helpers/number_format"
import { units } from "./format_helpers/number_format"

import { builder } from "./opening_hour/builder"
import { parser } from "./opening_hour/parser"
import { Schedules } from "./opening_hour/schedules"

import { removeWhitespaces } from "./rules/whitespaces"

import { generic } from './lang/generic'
import { errors } from './lang/errors'

export default {
  geo: {
    Geo
  },
  image: {
    imagePrepare,
    isWebpSupported,
    isWebpConversionSupported
  },
  upload: {
      FileUpload,
      ImageUpload,
  },
  format_helpers: {
    dateTimeFormatAgo,
    numberFormat,
    units,
  },
  opening_hour: {
    builder,
    parser,
    Schedules,
  },
  rules: {
    removeWhitespaces
  },
  lang: {
    errors,
    generic,
  },
};
