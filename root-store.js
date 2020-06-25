import { types } from "mobx-state-tree";

const LoadingStateModel = types
  .model("LoadingState")
  .props({
    id: types.identifier,
    lastFetchedTime: types.optional(types.Date, new Date(0)),
    // lastReadTime: types.optional(types.Date, new Date(0)),
    loading: false,
  })
  .actions(self => ({
    begin() {
      self.loading = true
    },

    end() {
      self.loading = false
    },
  }))

const MessageStoreModel = types
  .model("MessageStore")
  .props({
    userId: types.identifier,
    loadingStates: types.optional(types.map(LoadingStateModel), {
      notification: { id: "notification" },
      chat: { id: "chat" }
    }),
    currentChatName: "",
  })

export const RootStoreModel = types
  .model("RootStore")
  .props({
    messageStores: types.optional(types.map(MessageStoreModel), {}),
  })
  .actions(self => ({
    initMap() {
      self.messageStores.set('1', {userId: '1'})
    }
  }))