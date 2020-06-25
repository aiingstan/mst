import { RootStoreModel } from "./root-store";

describe('test root store', () => {
  it('can set message store', () => {
    const rootStore = RootStoreModel.create({})
    rootStore.initMap()
    expect(rootStore.messageStores.get('1').loadingStates.get('notification').loading).toBeFalsy()
  })
})