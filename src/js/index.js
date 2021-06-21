import '../style/main.scss';
import AlertService from './app/Alert.service';
import ComponentService from './app/Component.service';
import run from './app/app';
run(new AlertService(), new ComponentService());
