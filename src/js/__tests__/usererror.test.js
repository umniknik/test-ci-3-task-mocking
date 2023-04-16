import getLevel from '../user';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Testing getLevel with bad responce from fetchData', () => {
  fetchData.mockReturnValue(JSON.stringify(new Error('Mock this!')));

  const response = getLevel(1);
  expect(response).toEqual('Информация об уровне временно недоступна');

  expect(fetchData).toBeCalledWith('https://server/user/1');
});
