import React from 'react';
import uuid from 'uuid';
import { standardSentiment } from './modalFormSentimentLevel';

export const standardModel = {
  comment: {
    type: 'textarea',
    name: 'comment',
    placeholder: 'Add a comment',
    autoFocus: true
  },
  sentimentLevel: {
    type: 'select',
    name: 'sentimentLevel',
    value: 'needsWork',
    options: standardSentiment.map(x=> (<option key={uuid.v4()} value={x.value}>{x.text}</option>))
  }
};
