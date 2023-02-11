from pyscript import Element


form = Element('reg-form')
bgForm = Element('form-background')

#DONT WORK
#def BtnSubmit(*args):
#    print("click")


def OpenBtn():
    form.remove_class('hide')
    bgForm.remove_class('hide')
