import clipboard from 'clipboard-js';
import store from 'store';
import {notification} from 'services/notification';

export default (text) => {
  return clipboard.copy(text).then(() => {
    notification({
      text: store.getters['localization/getMessage']('copied'),
      type: 'success',
    });
  });
};
