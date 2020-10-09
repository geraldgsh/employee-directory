/* eslint-disable import/extensions */
import arrayReducer from '../../reducers/bosses';

const newBosses = [{
  arrays: ['Tim Burton'],
}];

const bossesAction = { type: 'BOSS_SUCCESS' };

describe('Add arrays', () => {
  it('should add arrays', () => {
    expect(arrayReducer(newBosses, bossesAction.type)).toEqual(newBosses, bossesAction.type);
  });
});
