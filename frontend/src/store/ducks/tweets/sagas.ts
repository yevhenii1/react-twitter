import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { addTweet, FetchAddTweetActionInterface, setTweets, setTweetsLoadingState, TweetsActionsType } from './actionCreators';
import { LoadingState, Tweet } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    yield put(setTweets(yield call(TweetsApi.fetchTweets)));

  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface) {
  try {
    const data: Tweet = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: "Test User",
        username: "test",
        avatarUrl: "https://source.unsplash.com/random/100x100?5"
      }
    }
    yield put(addTweet(yield call(TweetsApi.addTweet, data)));

  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
