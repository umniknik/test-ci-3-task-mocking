import getLevel from '../user';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Testing getLevel with gud responce from fetchData', () => {
  const mockResponse = { status: 'ok', level: 5 };
  fetchData.mockReturnValue(mockResponse);

  const response = getLevel(1);
  expect(response).toEqual('Ваш текущий уровень: 5');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
