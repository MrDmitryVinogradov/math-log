import Daemon from '../js/classes/Daemon';

test('should create Daemon', () => {
  const daemon = new Daemon('User');
  expect(daemon.name).toBe('User');
});

test('name length', () => {
  expect(() => new Daemon('fffffffffffff')).toThrow('Character name length must be 3-9 symbols');
});
