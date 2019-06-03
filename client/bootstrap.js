import { store } from '@things-factory/shell'
import datasourceBase from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    datasourceBase
  })
}
