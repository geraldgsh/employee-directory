const ARRAY_BEGIN = 'ARRAY_BEGIN';
const ARRAY_SUCCESS = 'ARRAY_SUCCESS';
const ARRAY_FAILURE = 'ARRAY_FAILURE';

const arrayBegin = () => ({
  type: ARRAY_BEGIN,
});

const arraySuccess = array => ({
  type: ARRAY_SUCCESS,
  array,
});

const arrayFailure = error => ({
  type: ARRAY_FAILURE,
  error,
});

export {
  ARRAY_BEGIN,
  ARRAY_SUCCESS,
  ARRAY_FAILURE,
  arrayBegin,
  arraySuccess,
  arrayFailure,
};
