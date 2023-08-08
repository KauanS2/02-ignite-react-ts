import { ActionTypes } from "./actions";
import { produce } from "immer";
export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startData: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}
interface CycleStateProps {
  cycles: Cycle[];
  cycleActiveId: string | null;
}

export function cyclesReducer(state: CycleStateProps, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle);
        draft.cycleActiveId = action.payload.newCycle.id;
      });
    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.cycleActiveId) {
            return { ...cycle, interruptedDate: new Date() };
          } else {
            return cycle;
          }
        }),
        cycleActiveId: null,
      };
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.cycleActiveId) {
            return { ...cycle, finishedDate: new Date() };
          } else {
            return cycle;
          }
        }),
        cycleActiveId: null,
      };
    default:
      return state;
  }
}
