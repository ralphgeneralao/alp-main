import { createSlice } from '@reduxjs/toolkit';

export interface LayoutProps {
  isSideNavigationVisible: boolean;
  sideMenuId?: string;
  isSidemenuIconView: boolean;
  showResourceFilter: boolean;
  selectedResourceFilter: string;
}

const initialState: LayoutProps = {
  isSideNavigationVisible: false,
  sideMenuId: undefined,
  isSidemenuIconView: false,
  showResourceFilter: false,
  selectedResourceFilter: '0',
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleSideMenu: {
      reducer: (state, action: any) => {
        state.isSideNavigationVisible = action.payload.showSideMenu;
        state.sideMenuId = action.payload.sideMenuId;
      },
      prepare: (showSideMenu: boolean, sideMenuId?: string): any => {
        return {
          payload: {
            showSideMenu,
            sideMenuId,
          },
        };
      },
    },
    toggleSidemenuIconView: {
      reducer: (state, action: any) => {
        state.isSidemenuIconView = action.payload.isIconView;
      },
      prepare: (isIconView: boolean): any => {
        return {
          payload: {
            isIconView,
          },
        };
      },
    },
    toggleResourceFilterVisible: {
      reducer: (state, action: any) => {
        state.showResourceFilter = action.payload.show;
      },
      prepare: (show: boolean): any => {
        return {
          payload: {
            show,
          },
        };
      },
    },
    setSelectedResourceFilter: {
      reducer: (state, action: any) => {
        state.selectedResourceFilter = action.payload.filterId;
      },
      prepare: (filterId: string): any => {
        return {
          payload: {
            filterId,
          },
        };
      },
    },
  },
});

export default layoutSlice.reducer;

export const { toggleSideMenu, toggleSidemenuIconView, toggleResourceFilterVisible, setSelectedResourceFilter } =
  layoutSlice.actions;
