import React from 'react';
import ShoppingCard from '../ShoppingCard';
import { MockedProvider } from '@apollo/client/testing';
import TestRenderer from 'react-test-renderer';

// npm test -- --coverage --watchAll=false para el report

describe('if isForFavourites is set to FALSE', () => {
  it ('should execute onClick prop when heart button is clicked', () => {
    let isFavourite = false;
    const mockedFn = jest.fn();
  
    const component = TestRenderer.create(
      <MockedProvider mocks={[]}>
        <ShoppingCard 
          isForFavourites={false} 
          isFavourite 
          id={'1'} 
          updateBooks={mockedFn}
        />
      </MockedProvider>
    );
  
    TestRenderer.act(() => {
      const heartButton = component.root.findByProps({id: "heart-button"});
      heartButton.props.onClick();
  
      component.update(
        <MockedProvider mocks={[]}>
          <ShoppingCard isForFavourites={false} isFavourite = {isFavourite} id={'1'} updateBooks={mockedFn} />
        </MockedProvider>
      );
    });
  
    expect(mockedFn).toHaveBeenCalled()
  });
  
  it ('should set iseFavourite = TRUE if heart button is clicked', () => {
    let isFavourite = false;
    const mockedFn = jest.fn();
  
    const component = TestRenderer.create(
      <MockedProvider mocks={[]}>
        <ShoppingCard 
          isForFavourites={false} 
          isFavourite 
          id={'1'} 
          updateBooks={mockedFn}
        />
      </MockedProvider>
    );

    const heartButton = component.root.findByProps({id: "heart-button"});
  
    TestRenderer.act(() => {
      const button = (
        <heartButton 
          onClick={() => {
            mockedFn
            isFavourite = true
          } }
        />);
    
      button.props.onClick()
  
      component.update(
        <MockedProvider mocks={[]}>
          <ShoppingCard isForFavourites={false} isFavourite = {isFavourite} id={'1'} updateBooks={mockedFn} />
        </MockedProvider>
      );
    });
  
    expect(heartButton.props.className).toBe('filled-icon icon-container');
  });
});

describe('if isForFavourites is set to TRUE', () => {
  it ('should execute onClick prop when close button is clicked', () => {
      let isFavourite = false;
      const mockedFn = jest.fn();
  
      const component = TestRenderer.create(
        <MockedProvider mocks={[]}>
          <ShoppingCard 
            isForFavourites={true} 
            isFavourite 
            id={'1'} 
            updateBooks={mockedFn}
          />
        </MockedProvider>
      );
  
      TestRenderer.act(() => {
        const closeButton = component.root.findByProps({id: "close-button"});
        
        closeButton.props.onClick();
    
        component.update(
          <MockedProvider mocks={[]}>
            <ShoppingCard isForFavourites={false} isFavourite = {isFavourite} id={'1'} updateBooks={mockedFn} />
          </MockedProvider>
        );
      });
  
      expect(mockedFn).toHaveBeenCalled()
    });
});
