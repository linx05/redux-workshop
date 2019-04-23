import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import AddTodo from './AddTodo'

const mapDispatchToProps = {
    addTodo: addTodo,
  }
  
  export default connect(null, mapDispatchToProps)(AddTodo)