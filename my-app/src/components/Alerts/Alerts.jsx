
import Alert from 'react-bootstrap/Alert';
import { CallDataBaseProvider } from '../../Context/Context';
import "./Alerts.css"

function AlertC() {
    const { alerta, User } = CallDataBaseProvider();

    return (
        <>
            {alerta &&
                <Alert key={'light'} variant={'light'} style={{ position: 'absolute', top: '10%', right: '0%', borderRadius: '10px', borderColor: '#6e6e6e', width: 'auto', height: 'auto', backgroundColor: '#e6e6e6', display: 'flex', flexDirection: 'column' }}>
                    Hola {User.username.nombre} !!
                    <div className="check-icon">
                        <span className="icon-line line-tip"></span>
                        <span className="icon-line line-long"></span>
                        <div className="icon-circle"></div>
                        <div className="icon-fix"></div>
                    </div>

                </Alert>
            }
        </>
    );
}

export default AlertC;