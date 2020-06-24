import { types, isArrayType, isType, applySnapshot, getSnapshot } from "mobx-state-tree";
import { User } from "./index";

describe('can create', () => {
  const foo = User.create({});
  it('can create', () => {
    expect(foo.name).toHaveLength(0);
    const loadingState = foo.loadingStates.get(12);
    loadingState.begin();
    // console.log(getSnapshot(loadingState));  
    // applySnapshot(foo, {});
    // console.log(getSnapshot(loadingState));  
    console.log(foo.loadingStates.has(12));
  });

  it('can reset', () => {
    foo.setName('foo');
    applySnapshot(foo, {});
    expect(foo.name).toHaveLength(0);    
  });
});
