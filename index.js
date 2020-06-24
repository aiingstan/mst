import { types } from 'mobx-state-tree';

const LoadingState = types
  .model('LoadingState')
  .props({
    userId: types.identifierNumber,
    loading: false,
  })
  .actions(self => ({
    begin() {
      self.loading = true;
    }
  }));

export const User = types
  .model("User")
  .props({
    name: '',
    loadingStates: types.optional(types.map(LoadingState), {[12]: {userId: 12}})
  })
  .actions(self => ({
    setName(name) {
      self.name = name;
    },
  }));