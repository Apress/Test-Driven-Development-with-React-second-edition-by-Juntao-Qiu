import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBox from "./SearchBox";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "../redux/bookListSlice";

describe("SearchBox", () => {
  it("renders input", () => {
    const mockStore = configureStore({
      reducer: {
        list: bookListReducer,
      },
    });

    render(
      <Provider store={mockStore}>
        <SearchBox />
      </Provider>
    );
    const input = screen.getByRole("textbox");

    act(() => {
      userEvent.type(input, "domain");
    });

    const state = mockStore.getState();
    expect(state.list.term).toEqual("domain");
  });

  it("trim empty strings", () => {
    const mockStore = configureStore({
      reducer: {
        list: bookListReducer,
      },
    });

    render(
      <Provider store={mockStore}>
        <SearchBox />
      </Provider>
    );
    const input = screen.getByRole("textbox");

    act(() => {
      userEvent.type(input, "  ");
    });

    const state = mockStore.getState();
    expect(state.list.term).toEqual("");
  });
});
