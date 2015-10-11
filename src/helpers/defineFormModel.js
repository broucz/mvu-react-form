import * as ShortText from '../modules/ShortText';
import feed from '../enhancers/feed';

const referenceMap = {
  short_text: ShortText
};

const defineFormModel = ({fields}) =>
  fields.map(({type, ...other}) => ({
    Module: feed(referenceMap[type], {...other})
  }));

export default defineFormModel;
