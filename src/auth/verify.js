import Input from "../shared/components/form-elements/input";
import Button from "../shared/components/form-elements/button";
const Verify = () => {    
    const InputHandler= () => {

    }
    return(<form id="loginForm"  className="row">
      <div
        className="col-md-10"
        style={{ margin: "auto", padding: "40px 0px" }}
      >
        <h3>Please Verfiy Your Account</h3>
          <div className="form-group">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onInput={InputHandler}
              validators={[]}
            />
          </div>

        <div className="form-group">
          <Button
            type="submit"
            className="btn-primary w-100"
            text="Verify"
          />
        </div>
        <div className="text-right">Resend Email</div>
      </div>
    </form>);
}
export default Verify;