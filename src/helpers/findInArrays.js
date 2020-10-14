/**
 * Returns an array element identified by an element in another array.
 * Ex: findInArrays([preset1, preset2], ['preset1', 'preset2'], 'preset1') => preset1
 * @param {object} props The props.
 */
const findInArrays = (props) => {
  const { targetArray, anotherArray, identifier } = props;

  const index = anotherArray.findIndex((item) => item === identifier);

  return index === -1 ? null : targetArray[index];
};

export default findInArrays;
