import { fireEvent, render } from '@testing-library/react-native';
import { Text } from 'react-native';
import { Tooltip } from '../src';

test('shows tooltip when pressed', () => {
  const { getByText } = render(
    <Tooltip content="Tooltip text">
      <Text>Press me</Text>
    </Tooltip>
  );

  fireEvent.press(getByText('Press me'));
  expect(getByText('Tooltip text')).toBeTruthy();
});
