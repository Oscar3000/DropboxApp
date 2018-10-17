import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure,shallow} from 'enzyme';
import {DropboxBuilder} from'./DropboxBuilder';
import Folder from '../../components/Folder';
import File from '../../components/File';
import Spinner from '../../components/Spinner/Spinner';

configure({adapter: new Adapter()});


describe('<DropboxBuilder />', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<DropboxBuilder getFiles={()=>{}} location={{pathname:'/'}}/>);
  });

  it('should render folder if files contains folder tag', () => {
    wrapper.setProps({files:[{".tag":"folder",name:"Folder one",id:"dcdfcd"}]});
    expect(wrapper.find(Folder)).toHaveLength(1);
  });

  it('should render file if files contains file tag', () => {
    wrapper.setProps({files:[{".tag":"file",name:"File one",id:"llvklc"}]});
    expect(wrapper.find(File)).toHaveLength(1);
  });

  it('should render multiple files and folders if files contains file tags and folder tags', () => {
    wrapper.setProps({files:[{".tag":"file",name:"File one",id:"sdkjxs"},{".tag":"file",name:"File two",id:"skckda"},{".tag":"folder",name:"Folder one",id:"skldkcmk"},{".tag":"file",name:"File three",id:"skcjxmskxmsx"},{".tag":"folder",name:"Folder two",id:"oproptf"}]});
    expect(wrapper.find(File)).toHaveLength(3);
    expect(wrapper.find(Folder)).toHaveLength(2);
  });

  it('should render Spinner if loading is true', () => {
    wrapper.setProps({loading:true});
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
});

