import ColumnType from "./ColumnType";
import tImageCell from './t-image-cell';
import { isCorrectUrl } from "../../../helpers";

export default class ImageColumnType extends ColumnType {
  static type = 'image';
  static cell = tImageCell;

  static convertStringToValue(str) {
    return isCorrectUrl(str) ? str : undefined;
  }
}
