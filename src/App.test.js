import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure,shallow} from 'enzyme';
import {App} from './App';
import Spinner from './components/Spinner/Spinner';
import Authentication from './containers/Authentication';
import Navbar from './components/Navbar';
import {Route} from 'react-router-dom';

configure({adapter:new Adapter()});

describe('<App />', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<App checkAuthState={()=>{}} setPath={()=>{}} location={{search:'',pathname:''}} match ={{url:'/'}}/>);
  });

  it('Should render Spinner if loading is true',()=>{
    wrapper.setProps({loading:true});
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it('Should render Authentication if isAuthenticated is false',()=>{
    wrapper.setProps({isAuthenticated:false});
    expect(wrapper.contains(<Authentication />)).toEqual(true);
  });

  it('Should render Navbar and Route if isAuthenticated is true',()=>{
    wrapper.setProps({isAuthenticated:true});
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Route)).toHaveLength(1);
  });
});
