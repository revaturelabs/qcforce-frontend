/*Line chart filter, also shows weeks 8-9 as separate from the others */
export function weekGraphData(state) {
  const multiData = [];
  const weekList = state.weekFilterOptions.slice(2);
  for (let i = 0; i < state.weekGraphQuestions.length; i++) {
    const qIndex = state.listShortQuestions.indexOf(state.weekGraphQuestions[i]);
    const data = weekList.map((week, j) => {
      if (i > 5 && j < 9) {
        return null;
      } else if (i <= 5 && j >= 9) {
        return null;
      } else {
        return 0;
      }
    });
    for (const responseDatum of state.weekGraphData) {
      const wIndex = weekList.indexOf(responseDatum.label);
      const value = responseDatum.data[state.listLongQuestions[qIndex]];
      if (value) {
        data[wIndex] = value;
      }
    }
    const label = state.weekGraphQuestions[i];
    multiData.push({ data, label });
  }
  return multiData;
}

/*Bar chart filter */
export function ratingGraphData(state) {
  const multiData = [];
  const questionList = state.ratingGraphQuestions;
  const data = questionList.map((q) => 0);
  for (let i = 0; i < questionList.length; i++) {
    const qIndex = state.listShortQuestions.indexOf(questionList[i]);
    let avg = 0;
    let num = 0;
    for (const responseDatum of state.ratingGraphData) {
      const value = responseDatum.data[state.listLongQuestions[qIndex]];
      if (value) {
        num++;
        avg = ((num - 1) / num) * avg + (1 / num) * value;
      }
    }
    data[i] = avg;
  }
  const label = `${state.batchFilter} (${state.weekFilter})`;
  multiData.push({ data, label });
  return multiData;
}
/* Horizontal bar chart filter */
export function paceGraphData(state) {
  const multiData = [];
  const questionList = state.paceGraphQuestions;
  const data = questionList.map((q) => 0);
  for (let i = 0; i < questionList.length; i++) {
    const qIndex = state.listShortQuestions.indexOf(questionList[i]);
    let avg = 0;
    let num = 0;
    for (const responseDatum of state.paceGraphData) {
      const value = responseDatum.data[state.listLongQuestions[qIndex]];
      if (value) {
        num++;
        avg = ((num - 1) / num) * avg + (1 / num) * value;
      }
    }
    data[i] = avg;
  }
  const label = `${state.batchFilter} (${state.weekFilter})`;
  multiData.push({ data, label });
  return multiData;
}

/*Second Horizontal bar chart filter, for showing All batches as one average */
export function paceGraphDataAll(state) {
  const multiData = [];
  const questionList = state.paceGraphQuestions;
  for (let i = 0; i < questionList.length; i++) {
    const qIndex = state.listShortQuestions.indexOf(questionList[i]);
    for (const responseDatum of state.paceGraphData) {
      const value = responseDatum.data[state.listLongQuestions[qIndex]];
      const data = questionList.map((q) => 0);

      if (value) {
        data[i] = value;
      }
      const label = responseDatum.label;
      multiData.push({ data, label });
    }
  }
  return multiData;
}

/* Pie chart filter */
export function assessGraphData(state) {
  let avg = 0;
  let num = 0;
  for (const responseDatum of state.assessGraphData) {
    const qIndex = state.listShortQuestions.indexOf(state.assessGraphQuestions[0]);
    const value = responseDatum.data[state.listLongQuestions[qIndex]];
    if (value) {
      num++;
      avg = ((num - 1) / num) * avg + (1 / num) * value;
    }
  }
  return [avg, 1 - avg];
}

