/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import readme from 'react-native-bpk-component-switch/readme.md';

import androidVideo from 'react-native-bpk-component-switch/android.mp4';
import iosVideo from 'react-native-bpk-component-switch/ios.mp4';
import IntroBlurb from './../../components/IntroBlurb';
import DocsPageBuilder from './../../components/DocsPageBuilder';
import DocsPageWrapper from './../../components/DocsPageWrapper';

const components = [
  {
    id: 'default',
    title: 'Default',
    videos: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosVideo}`,
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 750,
        height: 1334,
        src: `/${androidVideo}`,
        subText: '(Google Pixel emualtor)',
      },
    ],
  },
];

const blurb = [
  <IntroBlurb>
    Switches allow users to toggle between two states, on or off. On mobile,
    these are often used as a replacement for checkboxes.
  </IntroBlurb>,
];

const NativeSwitchSubPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Switch"
    components={components}
    readme={readme}
    showMenu={false}
    {...rest}
  />
);

const NativeSwitchPage = () => (
  <DocsPageWrapper
    title="Switch"
    blurb={blurb}
    nativeSubpage={<NativeSwitchSubPage wrapped />}
  />
);

export default NativeSwitchPage;
