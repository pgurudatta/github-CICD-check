import pickle

def load_user_data(serialized_data):
    # Insecure: loading data from untrusted source without validation
    return pickle.loads(serialized_data)

# Example usage
serialized_data = input("Enter the serialized user data: ")
user_data = load_user_data(serialized_data)
print(user_data)
