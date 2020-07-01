function _batchClearence(answer, batch) {
  if (batch === "Average") {
    return true;
  } else {
    return answer.batch === batch;
  }
}

function _weekClearence(answer, week) {
  if (week === "Average") {
    return true;
  } else {
    return answer.week === week;
  }
}

function calculate(data, questionList, batch, week) {
  let avg = questionList.map(() => 0);
  let num = questionList.map(() => 0);
  for (let answer of data) {
    let qIndex = questionList.indexOf(answer.question);
    if (qIndex != -1 && _batchClearence(answer, batch) && _weekClearence(answer, week)) {
      let val = answer.answer;
      num[qIndex]++;
      avg[qIndex] = ((num[qIndex] - 1) / num[qIndex]) * avg[qIndex] + (1 / num[qIndex]) * val;
    }
  }
  return avg;
}

export function ratingGraphFilter(state) {
  let bF = state.batchFilter;
  let wF = state.weekFilter;
  if (wF !== "All" && bF !== "All") {
    let data = calculate(state.responseData, state.ratingGraph.labels, bF, wF);
    let label = `${bF} (${wF})`;
    state.ratingGraph.data = [];
    state.ratingGraph.data.push({ data, label });
  } else if (wF === "All" && bF !== "All") {
    state.ratingGraph.data = [];
    for (let wFOption of state.weekFilterOptions.slice(2)) {
      let data = calculate(state.responseData, state.ratingGraph.labels, bF, wFOption);
      let label = `${bF} (${wFOption})`;
      state.ratingGraph.data.push({ data, label });
    }
  } else if (wF !== "All" && bF === "All") {
    state.ratingGraph.data = [];
    for (let bFOption of state.batchFilterOptions.slice(2)) {
      let data = calculate(state.responseData, state.ratingGraph.labels, bFOption, wF);
      let label = `${bFOption} (${wF})`;
      state.ratingGraph.data.push({ data, label });
    }
  }
  return state;
}
