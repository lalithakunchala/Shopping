import React, { Component } from 'react'
import { connect } from 'react-redux'

export class HostSignUp extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="registermodal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content" id="logincontent">
                    <div className="modal-header">
                        <div></div>
                        <h5 className="modal-title text-center h3 font-weight-lighter" id="registermodalLabel">Sign Up</h5>
                        <button type="button btn-lg" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="close-text">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        
                        <div id="login-separator">
                            or with your email
                        </div>
                        <form id="login-form">
                            <small className="form-text text-danger">{local_message !== ""?local_message:null}</small>
                            <div className="form-group">
                                <input type="text" value={firstname} onChange={handleFirstname} class="form-control" placeholder="Firstname" />
                            </div>
                            
                            <div className="form-group">
                                <input type="email" value={email} onChange={handleEmail} class="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" value={password} onChange={handlePassword} class="form-control" placeholder="Password" />
                            </div>
                            <button className="btn btn-block btn-danger" onClick={handleSubmit}>Sign Up</button>
                        </form>
                    </div>
                    <div className="modal-footer">

                    </div>
                </div>
            </div>
        </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HostSignUp)
