import { createSlice } from '@reduxjs/toolkit';

interface SubsiteHexagonProps {
  selectedSubsiteCode: string;
  isSelectionMode: boolean;
}

const initialState: SubsiteHexagonProps = {
  selectedSubsiteCode: '',
  isSelectionMode: false,
};

export const subsiteHexagonSlice = createSlice({
  name: 'subsiteHexagon',
  initialState,
  reducers: {
    resetSelection: (state) => {
      state.selectedSubsiteCode = initialState.selectedSubsiteCode;
      state.isSelectionMode = initialState.isSelectionMode;
    },
    setSelectedSubsite: {
      reducer: (state, action: any) => {
        state.selectedSubsiteCode = action.payload.selectedSubsiteCode;
      },
      prepare: (selectedSubsiteCode: string): any => {
        return {
          payload: {
            selectedSubsiteCode,
          },
        };
      },
    },
    setSelectionMode: {
      reducer: (state, action: any) => {
        state.isSelectionMode = action.payload.isSelectionMode;
      },
      prepare: (isSelectionMode: boolean): any => {
        return {
          payload: {
            isSelectionMode,
          },
        };
      },
    },
  },
});

export default subsiteHexagonSlice.reducer;

export const { resetSelection, setSelectedSubsite, setSelectionMode } = subsiteHexagonSlice.actions;
