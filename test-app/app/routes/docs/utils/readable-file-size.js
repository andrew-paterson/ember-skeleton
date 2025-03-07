import Route from '@ember/routing/route';
import FileSizes from '../../../mixins/model-data/filesizes.js';

export default class ReadableFileSize extends Route.extend(FileSizes) {}
