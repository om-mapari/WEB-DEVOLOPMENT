# WEB-DEVOLOPMENT
# These are the Notes that i created to 
# for learning web devolopemnt 

"""
from base_class import TaggingInterface

class StepFunctionTagger(TaggingInterface):
    def __init__(self):
        super().__init__('step_function')
        self.logger.info(f"Entered {type(self).__name__} execution")
        self.state_machine_arn_skeleton = "arn:aws:states:{self.aws_region}:{self.aws_account_id}:stateMachine:"

    def get_resources(self):
        available_state_machines = []
        
        boto_response = self.boto_call('list_state_machines', {})
        next_token = boto_response.get('nextToken', '')

        while next_token:
            for state_machine_detail in boto_response['stateMachines']:
                available_state_machines.append(state_machine_detail.get('name'))

            boto_response = self.boto_call('list_state_machines', {'nextToken': next_token})
            next_token = boto_response.get('nextToken', '')

        for state_machine_detail in boto_response['stateMachines']:
            available_state_machines.append(state_machine_detail.get('name'))

        return available_state_machines

    def tag_resources(self, state_machine_names, tag_key, tag_value):
        for state_machine_name in state_machine_names:
            boto_params = {
                'resourceArn': self.state_machine_arn_skeleton + state_machine_name,
                'tags': {tag_key: tag_value}
            }
            self.boto_call('tag_resource', boto_params)

    def untag_resources(self, state_machine_names, tag_key):
        for state_machine_name in state_machine_names:
            boto_params = {
                'resourceArn': self.state_machine_arn_skeleton + state_machine_name,
                'tagKeys': [tag_key]
            }
            self.boto_call('untag_resource', boto_params)

"""
