import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WorkspaceItem {
  id: string;
  name: string;
}

interface WorkspaceState {
  workspaces: WorkspaceItem[];
  currentWorkspace: WorkspaceItem | null;
}

const initialState: WorkspaceState = {
  workspaces: [],
  currentWorkspace: null,
};

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    initWorkspaces: (
      state,
      action: PayloadAction<{
        workspaces: WorkspaceItem[];
        currentWorkspace: WorkspaceItem | null;
      }>
    ) => {
      return action.payload;
    },

    updateCurrentWorkspace: (state, action: PayloadAction<Partial<WorkspaceItem>>) => {
      if (!state.currentWorkspace) return;
      state.currentWorkspace = {
        ...state.currentWorkspace,
        ...action.payload,
      };
    },
  },
});

export const workspaceActions = workspaceSlice.actions;
