import React, { useState } from 'react';
import styled from 'styled-components';

export const TagsInput = styled.div`

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 20px;
  width: 500px;
  padding: 0 8px;
  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;
    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #50BEE6;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      margin: 0 8px 8px 0;

      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        text-align: center;
        font-size: 10px;
        margin-left: 1px;
        color: #000000;
        cursor: pointer;
      }
    }
  }
  > input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
      outline: transparent;
    }
  }
  &:focus-within {
    border: 1px solid #4000c7;
  }
`;

export const Tag = () => {
  const [tags, setTags] = useState([]);

  const addTags = (event) => {
    const filtered = tags.filter((el) => el === event.target.value);
    if (event.target.value !== '' && filtered.length === 0) {
      setTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };

  return (
    <>
      <TagsInput>
        <ul id='tags'>
          {tags.map((tag, index) => (
            <li key={index} className='tag'>
              <span className='tag-title'>{tag}</span>
            </li>
          ))}
        </ul>
        <input className='tag-input' type='text' onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)} placeholder=' add tags' />
      </TagsInput>
    </>
  );
};
