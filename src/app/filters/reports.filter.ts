export function weekGraphData(state) {
  // tslint:disable-next-line: prefer-const
  let multiData = [];
  const weekList = state.weekFilterOptions.slice(2);
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < state.weekGraphQuestions.length; i++) {
    const qIndex = state.listShortQuestions.indexOf(state.weekGraphQuestions[i]);
    const data = weekList.map((week) => 0);
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

