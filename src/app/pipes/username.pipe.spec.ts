import { UsernamePipe } from './username.pipe';

describe('UsernamePipe', () => {
  it('create an instance', () => {
    const pipe = new UsernamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return only User name skipping symbols',()=>{
    const pipe = new UsernamePipe();
    let result = pipe.transform('sanket@ibm.com')
    expect(result).toEqual('Sanket')
  })
});


