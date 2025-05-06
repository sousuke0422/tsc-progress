// progress bar code from refs: https://github.com/unjs/webpackbar
import { grey } from "ansis";
import { renderBar, colorize, ellipsisLeft } from "./utils/cli";
import { BULLET, TICK, CROSS, CIRCLE_OPEN, NEXT } from "./utils/consts";

import LogUpdate from './utils/log-update'
import { State } from "./types";

export const formatRequest = (request: any) => {
  const loaders = request.loaders.join(NEXT)

  if (!loaders.length) {
    return request.file || ''
  }

  return `${loaders}${NEXT}${request.file}`
}

const logUpdate = new LogUpdate()

let lastRender = Date.now();

export default class FancyReporter {
  statesArray: State[] = []
  hasErrors = false

  updateStatesArray(statesArray: State[]) {
    this.statesArray = statesArray
  }

  allDone() {
    logUpdate.done();
  }

  done() {
    this._renderStates(this.statesArray);

    if (this.hasErrors) {
      logUpdate.done();
    }
  }

  progress() {
    if (Date.now() - lastRender > 50) {
      this._renderStates(this.statesArray);
    }
  }

  _renderStates(statesArray: State[]) {
    lastRender = Date.now();

    const renderedStates = statesArray
      .map((c) => this._renderState(c))
      .join("\n\n");

    logUpdate.render("\n" + renderedStates + "\n");
  }

  _renderState(state: State) {
    const color = colorize(state.color);

    let line1;
    let line2;

    if (state.progress >= 0 && state.progress < 100) {
      // Running
      line1 = [
        color(BULLET),
        color(state.name),
        renderBar(state.progress, state.color),
        state.message,
        `(${state.progress || 0}%)`,
        grey(state.details[0] || ""),
        grey(state.details[1] || ""),
      ].join(" ");

      line2 = state.request
        ? " " +
          grey(ellipsisLeft(formatRequest(state.request), logUpdate.columns))
        : "";
    } else {
      let icon = " ";

      if (state.hasErrors) {
        icon = CROSS;
      } else if (state.progress === 100) {
        icon = TICK;
      } else if (state.progress === -1) {
        icon = CIRCLE_OPEN;
      }

      line1 = color(`${icon} ${state.name}`);
      line2 = grey("  " + state.message);
    }

    return line1 + "\n" + line2;
  }
}
