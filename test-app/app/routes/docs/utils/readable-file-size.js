import Route from '@ember/routing/route';
import FileSizes from '../../../mixins/model-data/filesizes';

export default class ReadableFileSize extends Route.extend(FileSizes) {}
